from django.shortcuts import render
from django.views.generic import ListView, CreateView

# 'reverse_lazy' reverses and resolves URLs when it needed 
from django.urls import reverse_lazy
from .forms import PostForm

from .models import Post

# Create your views here.
class HomePageView(ListView):
    model = Post
    template_name = 'home.html'
    
# view to allow users to upload new images 'form.py'
class CreatePostView(CreateView):
    model = Post
    template_name = 'post.html'
    form_class = PostForm
    success_url = reverse_lazy('home')