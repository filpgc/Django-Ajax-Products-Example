from django.shortcuts import render, get_object_or_404, get_list_or_404
from django.http import Http404
from django.http import HttpResponse
from django.template import loader
from django.template import RequestContext, loader
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Product
import json

from django.core import serializers

#create your views here
appname = 'Products'
def index(request):
    return render(request, 'products/index.html')

#The render() function takes the request object as its first argument, a template name as its second argument and a dictionary as its optional third argument. It returns an HttpResponse object of the given template rendered with the given context.

@csrf_exempt
def get(request):
    context= serializers.serialize('json', Product.objects.all())
    return JsonResponse(context, safe=False)

@csrf_exempt
def post_product(request):
    if request.method == 'POST':
        rp = json.loads(request.body.decode('utf-8'))
        product = Product(name=rp['name'], description=rp['description'], price = rp['price'])
        product.save()
        context = serializers.serialize('json', Product.objects.all())
        return JsonResponse(context, safe=False)
    

@csrf_exempt
def delete_product(request):
    rp=json.loads(request.body.decode('utf-8'))
    Product.objects.get(pk=rp['pk']).delete()
    return get(request)

@csrf_exempt
def update_product(request):
    rp=json.loads(request.body.decode('utf-8'))
    p = Product.objects.get(pk=rp['pk'])
    p.name=rp['name']
    p.description=rp['description']
    p.price=rp['price']
    p.save()
    return get(request)




