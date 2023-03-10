# Generated by Django 4.0.3 on 2022-09-13 18:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salesrecord',
            name='automobile',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='sales', to='sales_rest.automobilevo'),
        ),
        migrations.AlterField(
            model_name='salesrecord',
            name='customer',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='sales', to='sales_rest.customer'),
        ),
        migrations.AlterField(
            model_name='salesrecord',
            name='sales_person',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='sales', to='sales_rest.salesperson'),
        ),
    ]
