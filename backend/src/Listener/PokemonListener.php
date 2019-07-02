<?php

namespace App\Listener;

use App\Entity\Pokemon;
use App\Entity\Ability;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;

class PokemonListener
{
    public function postPersist(LifecycleEventArgs $args)
    {
        $entity = $args->getObject();

        if (!$entity instanceof Pokemon) {
            return;
        }

        if (count($entity->getAbilities()) == 0) {
            $entityManager = $args->getObjectManager();
            $abilities = $entityManager->getRepository(Ability::class)->findAll();
            $randomAbility = $abilities[array_rand($abilities)];
            $entity->setAbilities([$randomAbility]);
            $entityManager->persist($entity);
            $entityManager->flush();
        }
    }
}
