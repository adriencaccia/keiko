<?php

namespace App\Controller;

use App\Entity\Pokemon;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface;

class PokemonController
{
    private $normalizer;
    private $entityManager;

    public function __construct(NormalizerInterface $normalizer, EntityManagerInterface $entityManager)
    {
        $this->normalizer = $normalizer;
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/pokemon", methods={"GET"})
     */
    public function get(): JsonResponse
    {
        $pokemon = new Pokemon();
        $pokemon->setName("bulbasaur");
        $pokemon->setWeight(67);
        $pokemon->setHeight(67);

        $serializedPokemon = $this->normalizer->normalize($pokemon, "json");

        return new JsonResponse($serializedPokemon);
    }

    /**
     * @Route("/pokemon", methods={"POST"})
     */
    public function createPokemon(): JsonResponse
    {
        $pokemon = new Pokemon();
        $pokemon->setName("bulbasaur");
        $pokemon->setWeight(67);
        $pokemon->setHeight(67);

        $this->entityManager->persist($pokemon);
        $this->entityManager->flush();

        return new JsonResponse('Saved new pokemon with id ' . $pokemon->getId());
    }
}
