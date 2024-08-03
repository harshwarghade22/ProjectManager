from django.db import models

# Create your models here.
class Project(models.Model):
    thumbnail=models.ImageField(upload_to='thumbnail/images',null=True, blank=True)
    title = models.CharField(max_length=100,blank=False,null=False)
    description = models.TextField(blank=True,null=True)
    category=models.CharField(max_length=50)
    github_url = models.URLField(blank=True,null=True)

    def __str__(self):
        return self.title
