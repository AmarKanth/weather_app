# Generated by Django 4.1.2 on 2022-10-21 14:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='City',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('findname', models.CharField(max_length=200)),
                ('country', models.CharField(max_length=200)),
                ('lon', models.CharField(max_length=200)),
                ('lat', models.CharField(max_length=200)),
            ],
        ),
    ]