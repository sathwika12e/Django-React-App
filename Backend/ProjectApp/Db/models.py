from django.db import models

class ParentDb(models.Model):
    name=models.CharField(max_length=20)
    mobileno=models.CharField(max_length=10,primary_key=True)
    DNAStrand1=models.CharField(max_length=5)
    DNAStrand2=models.CharField(max_length=5)
class ChildDb(models.Model):
    name=models.CharField(max_length=20)
    mobileno=models.CharField(max_length=10,primary_key=True)
    DNAStrand1=models.CharField(max_length=5)
    DNAStrand2=models.CharField(max_length=5)
