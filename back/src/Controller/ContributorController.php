<?php

namespace App\Controller;

use App\Entity\Contributor;
use App\Entity\Project;
use App\Repository\ContributorRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\ContributorType;
use App\Repository\ProjectRepository;
use App\Repository\PullRequestRepository;

#[IsGranted('ROLE_USER')]
#[Route('/contributor', name: 'contributor_')]
class ContributorController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(
        ContributorRepository $contributorRepository,
        PullRequestRepository $pullRequestRepository
    ): Response {
        $contributors = $contributorRepository->findAll();
        $lastPRs = [];

        foreach ($contributors as $contributor) {
            $lastPRs[$contributor->getId()] = $pullRequestRepository->findLastPRForContributor($contributor);
        }

        return $this->render('contributor/index.html.twig', [
            'contributors' => $contributors,
            'last_prs' => $lastPRs,
        ]);
    }

    #[Route('/addContributor', name: 'add')]
    public function addContributor(ContributorRepository $contributorRepository, Request $request): Response
    {
        $contributor = new Contributor();

        $form = $this->createForm(ContributorType::class, $contributor);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $contributorRepository->save($contributor, true);

            $this->addFlash('success', 'Contributor was created you rock !');

            return $this->redirectToRoute('contributor_index');
        }

        return $this->render('contributor/new.html.twig', [
            'contributorForm' => $form,
            'contributor' => $contributor,
        ]);
    }

    #[Route('/{id}', name: 'show')]
    public function showContributor(
        Contributor $contributor,
        PullRequestRepository $pullRequestRepository,
        ProjectRepository $projectRepository
    ): Response {
        $projects = $projectRepository->getProjectsInContributorByOrderAlphabetic($contributor) ;
        $pullRequestsSort = $pullRequestRepository->getSortedPullRequestsForContributor($contributor);


        return $this->render('contributor/show.html.twig', [
            'contributor' => $contributor,
            'pullRequests' => $pullRequestsSort,
            'projects' => $projects,
        ]);
    }

    #[Route('/contributor/edit/{id}', name: 'edit')]
    public function editContributor(
        Request $request,
        ContributorRepository $contributorRepository,
        Contributor $contributor
    ): Response {

        $form = $this->createForm(ContributorType::class, $contributor);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $contributorRepository->save($contributor, true);

            $this->addFlash('success', 'Modification successful.');

            return $this->redirectToRoute('contributor_show', [
                'id' => $contributor->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('contributor/edit.html.twig', [
            'contributorForm' => $form,
            'contributor' => $contributor,
        ]);
    }

    #[Route('/delete/{id}', name: 'delete', methods: ['POST'])]
    public function deleteContributor(
        Request $request,
        Contributor $contributor,
        ContributorRepository $contributorRepository
    ): Response {

        if (is_string($request->request->get('_token')) || is_null($request->request->get('_token'))) {
            if ($this->isCsrfTokenValid('_delete' . $contributor->getId(), $request->request->get('_token'))) {
                $contributorRepository->remove($contributor, true);
            }
        }

        $this->addFlash('success', 'Contributor was deleted with success.');

        return $this->redirectToRoute('contributor_index', [], Response::HTTP_SEE_OTHER);
    }
}
