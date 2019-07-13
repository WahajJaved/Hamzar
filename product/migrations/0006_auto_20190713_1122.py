# Generated by Django 2.2.3 on 2019-07-13 11:22

from django.db import migrations, models
import django.db.models.deletion
import product.models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0005_auto_20190713_0350'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='product_image',
        ),
        migrations.CreateModel(
            name='ProductImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_image', models.ImageField(blank=True, null=True, upload_to=product.models.get_image_path)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='product.Product')),
            ],
        ),
    ]
