import tempfile
from django.test import TestCase
from .models import Technology


class TechnologyModelUnitTestCase(TestCase):
    def setUp(self):
        self.tag = Technology.objects.create(
            name='Django',
            icon=tempfile.NamedTemporaryFile(suffix='.svg').name
        )

    def test_tag_model(self):
        data = self.tag
        self.assertIsInstance(data, Technology)
