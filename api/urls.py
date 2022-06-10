from django.urls import path
from . import views

urlpatterns = [
    path('notes/', views.getNotes, name="notes"),
    path('notes/<str:pk>/', views.getNote, name="note"),

    
    # delete for makeing RESTFUL API

    # path('notes/create/', views.createNote, name="create-notes"),
    # path('notes/<str:pk>/update/', views.updateNote, name="update-note"),
    # path('notes/<str:pk>/delete/', views.deleteNote, name="delete-note"),
]