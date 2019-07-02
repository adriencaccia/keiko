<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     normalizationContext={"groups"={"pokemon"}},
 * )
 * @ORM\Table(name="pokemon")
 * @ORM\Entity()
 * @UniqueEntity("name")
 */
class Pokemon
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("pokemon")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Assert\NotBlank
     * @Groups("pokemon")
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     * @Assert\NotBlank
     * @Groups("pokemon")
     */
    private $weight;

    /**
     * @ORM\Column(type="integer")
     * @Assert\NotBlank
     * @Groups("pokemon")
     */
    private $height;

    /**
     * @ORM\ManyToMany(targetEntity="Ability")
     * @Groups("pokemon")
     */
    private $abilities;

    public function __construct()
    {
        $this->abilities = [];
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name): void
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getHeight()
    {
        return $this->height;
    }

    /**
     * @param mixed $height
     */
    public function setHeight($height): void
    {
        $this->height = $height;
    }

    /**
     * @return mixed
     */
    public function getWeight()
    {
        return $this->weight;
    }

    /**
     * @param mixed $weight
     */
    public function setWeight($weight): void
    {
        $this->weight = $weight;
    }

    /**
     * @return mixed
     */
    public function getAbilities()
    {
        return $this->abilities;
    }

    /**
     * @param mixed $abilities
     */
    public function setAbilities($abilities): void
    {
        $this->abilities = $abilities;
    }
}
