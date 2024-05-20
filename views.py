from django.shortcuts import get_object_or_404, render
from django.http import JsonResponse
from django.shortcuts import render
import json
from .models import Reservation
import datetime


def reservations_by_manager(request, manager_id):
    reservations = Reservation.objects.filter(manager_id=manager_id)
    return render(request, 'VoirReservations.html', {'reservations': reservations})

def update_reservation_status(request, reservation_id):
    if request.method == 'POST':
        reservation = get_object_or_404(Reservation, reservation_id=reservation_id)
        data = json.loads(request.body)
        reservation.statut = data.get('statut', reservation.statut)
        reservation.save()
        return JsonResponse({'status': 'success'})
    return JsonResponse({'status': 'error'}, status=400)

def reservations_status(request):
    now = datetime.datetime.now().date()

    reservations_in_progress = Reservation.objects.filter(date_debut__lte=now, date_fin__gte=now)
    reservations_upcoming = Reservation.objects.filter(date_debut__gt=now)
    reservations_past = Reservation.objects.filter(date_fin__lt=now)

    return render(request, 'Res.html', {
        'reservations_in_progress': reservations_in_progress,
        'reservations_upcoming': reservations_upcoming,
        'reservations_past': reservations_past,
    })