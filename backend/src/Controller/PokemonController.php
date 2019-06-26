<?php

namespace App\Controller;

use App\Entity\Pokemon;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;

class PokemonController
{
    private $normalizer;
    private $entityManager;
    private $serializer;

    public function __construct(
        NormalizerInterface $normalizer,
        EntityManagerInterface $entityManager,
        SerializerInterface $serializer
    ) {
        $this->normalizer = $normalizer;
        $this->entityManager = $entityManager;
        $this->serializer = $serializer;
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
    public function createPokemon(Request $request): JsonResponse
    {
        $data = $request->getContent();
        $pokemon = $this->serializer->deserialize($data, Pokemon::class, "json");

        $this->entityManager->persist($pokemon);
        $this->entityManager->flush();

        return new JsonResponse('Saved new pokemon with id ' . $pokemon->getId());
    }
}
