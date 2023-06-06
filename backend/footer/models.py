from django.db import models


class Footer(models.Model):
  copyright = models.CharField(max_length=200)
  # four values below are for giving credit to the author of the Hero image
  # # and are displayed in the Footer section
  image_author_name = models.CharField(max_length=100, null=True, blank=True)
  image_author_link = models.CharField(max_length=250, null=True, blank=True)
  image_website_name = models.CharField(max_length=100, null=True, blank=True)
  image_website_link = models.CharField(max_length=250, null=True, blank=True)

  class Meta:
    verbose_name = 'Footer'
    verbose_name_plural = 'Footer'

  def __str__(self):
    return self.copyright
