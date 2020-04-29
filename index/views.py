from django.shortcuts import render
from .models import Item
from django.views.generic import ListView 


class HomeView(ListView):
    model = Item
    paginate_by = 10
    template_name = "index.html"
