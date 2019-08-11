<?php

namespace App\Controller;

use App\Entity\Pokemon;
use App\Service\PokemonService;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;

class PokemonController
{
    private $normalizer;
    private $serializer;
    private $pokemonService;

    public function __construct(
        NormalizerInterface $normalizer,
        SerializerInterface $serializer,
        PokemonService $pokemonService

    ) {
        $this->normalizer = $normalizer;
        $this->serializer = $serializer;
        $this->pokemonService = $pokemonService;
    }

    /**
     * @Route("/pokemon/{id}", methods={"GET"})
     */
    public function get($id): JsonResponse
    {
        $pokemon = $this->pokemonService->get($id);
        $serializedPokemon = $this->normalizer->normalize($pokemon);

        return new JsonResponse($serializedPokemon);
    }

    // /**
    //  * @Route("/pokemon", methods={"GET"})
    //  */
    // public function getAll(): JsonResponse
    // {
    //     $pokemons = $this->pokemonService->getAll();
    //     $serializedPokemons = $this->normalizer->normalize($pokemons);

    //     return new JsonResponse($serializedPokemons);
    // }

    /**
     * @Route("/pokemon", methods={"POST"})
     */
    public function createPokemon(Request $request): JsonResponse
    {
        $data = $request->getContent();
        $pokemon = $this->serializer->deserialize($data, Pokemon::class, "json");
        $pokemon = $this->pokemonService->create($pokemon);
        $serializedPokemon = $this->normalizer->normalize($pokemon);

        return new JsonResponse($serializedPokemon);
    }
}
