<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PokemonController
{
    /**
     * @Route("/pokemon")
     */
    public function helloWorld()
    {
        return new Response("Hello World");
    }
}
