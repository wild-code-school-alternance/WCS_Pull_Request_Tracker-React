<?php

namespace App\DataFixtures;

use App\Entity\Project;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class ProjectFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create();

        for ($i = 0; $i < 8; $i++) {
            $project = new Project();
            $project->setName($faker->words(3, true));
            $project->setGithubLink('https://github.com');
            $this->addReference('project' . $i, $project);

            $manager->persist($project);
        }

        $manager->flush();
    }
}
