from django.contrib import admin
from .models import Task

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'completed', 'created_at')  # Display these columns in the admin panel
    list_filter = ('completed',)  # Add a filter for completed tasks
    search_fields = ('title',)  # Enable search by task title
