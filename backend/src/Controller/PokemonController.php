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
     * @Route("/pokemon/{id}", methods={"GET"})
     */
    public function get($id): JsonResponse
    {
        $pokemon = $this->entityManager->getRepository(Pokemon::class)->findOneById($id);
        $serializedPokemon = $this->normalizer->normalize($pokemon);

        return new JsonResponse($serializedPokemon);
    }

    /**
     * @Route("/pokemon", methods={"GET"})
     */
    public function getAll(): JsonResponse
    {
        $pokemons = $this->entityManager->getRepository(Pokemon::class)->findAll();
        $serializedPokemons = $this->normalizer->normalize($pokemons);

        return new JsonResponse($serializedPokemons);
    }

    /**
     * @Route("/pokemon", methods={"POST"})
     */
    public function createPokemon(): JsonResponse
    {
        $pokemon = new Pokemon();
        $pokemon->setName("pikachu");
        $pokemon->setWeight(17);
        $pokemon->setHeight(17);

        $this->entityManager->persist($pokemon);
        $this->entityManager->flush();

        return new JsonResponse('Saved new pokemon with id ' . $pokemon->getId());
    }
}
