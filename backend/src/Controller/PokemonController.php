<?php

namespace App\Controller;

use App\Entity\Pokemon;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

class PokemonController
{
    private $normalizer;

    public function __construct(NormalizerInterface $normalizer)
    {
        $this->normalizer = $normalizer;
    }

    /**
     * @Route("/pokemon")
     */
    public function get()
    {
        $pokemon = new Pokemon();
        $pokemon->setName("bulbasaur");
        $pokemon->setWeight(67);
        $pokemon->setHeight(67);

        $serialized_pokemon = $this->normalizer->normalize($pokemon, "json");

        return new JsonResponse($serialized_pokemon);
    }
}
