<?php

namespace App\Controller;

use App\Entity\Reservation;
use App\Repository\ReservationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\BrowserKit\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class ReservationController extends AbstractController
{
    #[Route('/api/reservation', name: 'allReservations', methods: ['GET'])]
    public function getAllReservation(ReservationRepository $ReservationsRepository, SerializerInterface $serializer): JsonResponse
    {
        $Reservations = $ReservationsRepository->findAll();
        
        $ReservationsJson = $serializer->serialize($Reservations, 'json');
        return new JsonResponse($ReservationsJson, Response::HTTP_OK, [], true);
    }

    // Route pour récupérer un Reservation par son id
    #[Route('/api/reservation/{id}', name: 'ReservationId', methods: ['GET'])]
    public function getDetailReservation(Reservation $Reservations, ReservationRepository $ReservationsRepository, SerializerInterface $serializer): JsonResponse
    {   
        // Code simplifié avec le param converter : vérifie si l'id existe et si oui, retourne la mairie
        $ReservationJson = $serializer->serialize($Reservations, 'json');
        return new JsonResponse($ReservationJson, Response::HTTP_OK, [], true);
        
    }

    // Route pour ajouter un Reservation
    #[Route('/api/reservation/create', name: 'addReservation', methods: ['POST'])]
    public function addReservation(Request $request, EntityManagerInterface $add, SerializerInterface $serializer): JsonResponse
    {
        $Reservations = $serializer->deserialize($request->getContent(), Reservations::class, 'json');
        $add->persist($Reservations);
        $add->flush();
        
        $jsonReservation = $serializer->serialize($Reservations, 'json');
        return new JsonResponse($jsonReservation, Response::HTTP_CREATED, [], true);
    }
    
    // Route pour modifier un Reservation par son id
    #[Route('/api/reservation/update/{id}', name: 'updateReservation', methods: ['PUT'])]
    public function updateReservation(Reservation $Reservation, Request $request, EntityManagerInterface $update, SerializerInterface $serializer): JsonResponse
    {
        $Reservation = $serializer->deserialize($request->getContent(), Reservation::class, 'json', ['object_to_populate' => $Reservation]);
        $update->persist($Reservation);
        $update->flush();

        $jsonReservation = $serializer->serialize($Reservation, 'json');
        return new JsonResponse($jsonReservation, Response::HTTP_OK, [], true);
    }

    // Route pour supprimer un Reservation par son id
    #[Route('/api/reservation/delete/{id}', name: 'deleteReservation', methods: ['DELETE'])]
    public function deleteReservation(Reservation $Reservation, EntityManagerInterface $delete): JsonResponse
    {
        $delete->remove($Reservation);
        $delete->flush();
        return new JsonResponse('Reservation supprimé avec succès', Response::HTTP_OK);
    }
}
