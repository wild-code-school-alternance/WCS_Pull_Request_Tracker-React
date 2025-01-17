<?php

namespace App\Controller;

use App\Repository\PullRequestRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

#[IsGranted('ROLE_USER')]
#[Route('/pullrequest', name: 'pull_request_')]
class PullRequestController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(PullRequestRepository $pullRequestRepository): Response
    {
        $pullRequests = $pullRequestRepository->getPullRequestsByOrderStatus();
        return $this->render('pull_request/index.html.twig', [
            'pullRequests' => $pullRequests,
        ]);
    }

    #[Route('/{id<^[0-9]+$>}', methods: ['GET'], name: 'show')]
    public function show(int $id, PullRequestRepository $pullRequestRepository): Response
    {
        $pullRequest = $pullRequestRepository->findOneBy(['id' => $id]);
        if (!$pullRequest) {
            throw $this->createNotFoundException(
                'No pullRequest with id : ' . $id . ' found.'
            );
        }
        return $this->render('pull_request/show.html.twig', [
            'pullRequest' => $pullRequest,
        ]);
    }
}
