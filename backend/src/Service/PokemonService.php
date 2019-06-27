<?php

namespace App\Service;

use App\Entity\Pokemon;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class PokemonService
{
    private $entityManager;
    private $validator;

    public function __construct(
        EntityManagerInterface $entityManager,
        ValidatorInterface $validator
    ) {
        $this->entityManager = $entityManager;
        $this->validator = $validator;
    }

    public function get($id)
    {
        return $this->entityManager->getRepository(Pokemon::class)->findOneById($id);
    }

    public function getAll()
    {
        return $this->entityManager->getRepository(Pokemon::class)->findAll();
    }

    public function create($pokemon)
    {
        $errors = $this->validator->validate($pokemon);
        if (count($errors) > 0) {
            $errorsString = (string)$errors;
            throw new BadRequestHttpException($errorsString);
        }

        $this->entityManager->persist($pokemon);
        $this->entityManager->flush();

        return $pokemon;
    }
}
