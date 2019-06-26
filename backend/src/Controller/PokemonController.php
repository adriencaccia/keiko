<?php

namespace App\Controller;

use App\Entity\Pokemon;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class PokemonController
{
    private $normalizer;

    public function __construct(NormalizerInterface $normalizer)
    {
        $this->normalizer = $normalizer;
    }

    /**
     * @Route("/pokemon", methods={"GET"})
     */
    public function get()
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
    public function createPokemon()
    {
        return new Response("Hello World");
    }
}
