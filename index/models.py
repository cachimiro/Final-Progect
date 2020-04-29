from django.db import models
# Create your models here.
CATEGORY_OPTIONS = (
    ('M', 'Manilla'),
    ('C', 'Collar'),
    ('A', 'Arete')
)
LABEL_CHOICES = (
    ('I', 'info'),
    ('S', 'secondary'),
    ('D', 'danger')
)


class Item(models.Model):
    title = models.CharField(max_length=100)
    price = models.FloatField()
    discount_price = models.FloatField(blank=True, null=True)
    category = models.CharField(choices=CATEGORY_OPTIONS, max_length=2)
    label = models.CharField(default="I", choices=LABEL_CHOICES, max_length=1)
    slug = models.SlugField()
    description = models.TextField()
    image = models.ImageField()

    def __str__(self):
        return self.title
