
from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=2000, null=True, blank=True, default=None)
    description = models.TextField(max_length=20000, null=True, blank=True, default=None)
    price = models.DecimalField(max_digits=5, decimal_places=2,default=0.0, null=True, blank=True)
    def _str_(self):
        return self.name +" " + self.description + " " + self.price



    #Each field is represented by an instance of a Field class – e.g., CharField for character fields and DateTimeField for datetimes. This tells Django what type of data each field holds.


    #Finally, note a relationship is defined, using ForeignKey. That tells Django each Choice is related to a single Question. Django supports all the common database relationships: many-to-one, many-to-many, and one-to-one.