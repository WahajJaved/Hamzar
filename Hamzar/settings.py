"""
Django settings for Hamzar project.

"""

import os

from django.core.exceptions import ImproperlyConfigured
from oscar import get_core_apps, OSCAR_MAIN_TEMPLATE_DIR
from oscar.defaults import *

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DEBUG = True

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'db82s+s5+qa#k5ot&ft3=!^y5al3)_*%!2y77u!eu65wi!((&4'

# SECURITY WARNING: don't run with debug turned on in production!

""" Gets the environment variable or throws ImproperlyConfigured
     	exception
     	:rtype: object
"""


def get_env_variable(name):
    try:
        return os.environ[name]
    except KeyError:
        raise ImproperlyConfigured('Environment variable “%s” not found.' % name)
    end


ALLOWED_HOSTS = [
    'localhost',
    '*'
]

# Application definition

INSTALLED_APPS = [
                     'django.contrib.admin',
                     'django.contrib.auth',
                     'django.contrib.contenttypes',
                     'django.contrib.sessions',
                     'django.contrib.sites',
                     'django.contrib.messages',
                     'django.contrib.staticfiles',
                     'django.contrib.flatpages',

                     'rest_framework',
                     'oscarapi',
                     'widget_tweaks',
                     'rest_registration',
                     'corsheaders',

                     'Customer',

                 ] + get_core_apps(['dashboard.orders'])

SITE_ID = 1

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',

    'oscar.apps.basket.middleware.BasketMiddleware',
    'django.contrib.flatpages.middleware.FlatpageFallbackMiddleware',
]

ROOT_URLCONF = 'Hamzar.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, 'templates'),
            OSCAR_MAIN_TEMPLATE_DIR
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',

                'oscar.apps.search.context_processors.search_form',
                'oscar.apps.promotions.context_processors.promotions',
                'oscar.apps.checkout.context_processors.checkout',
                'oscar.apps.customer.notifications.context_processors.notifications',
                'oscar.core.context_processors.metadata',
            ],
        },
    },
]

AUTHENTICATION_BACKENDS = (
    'oscar.apps.customer.auth_backends.EmailBackend',
    'django.contrib.auth.backends.ModelBackend',
)

WSGI_APPLICATION = 'Hamzar.wsgi.application'

# Search Engine


HAYSTACK_CONNECTIONS = {
    'default': {
        'ENGINE': 'haystack.backends.solr_backend.SolrEngine',
        'URL': 'http://127.0.0.1:8983/solr/hamzar',
        'ADMIN_URL': 'http://127.0.0.1:8983/solr/admin/cores',
        'INCLUDE_SPELLING': True,
    },
}

# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

if os.getenv('GAE_APPLICATION', None):
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': os.environ.get('POSTGRES_DB', 'hamzar'),
            'USER': os.environ.get('POSTGRES_USER', 'hamzar'),
            'PASSWORD': os.environ.get('POSTGRES_PASSWORD', '0214'),
            'HOST': 'localhost',
            'PORT': '5432',
            'ATOMIC_REQUESTS': True,
        }
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': os.environ.get('POSTGRES_DB', 'hamzar'),
            'USER': os.environ.get('POSTGRES_USER', 'hamzar'),
            'PASSWORD': os.environ.get('POSTGRES_PASSWORD', '0214'),
            'HOST': 'localhost',
            'PORT': '5432',
            'ATOMIC_REQUESTS': True,
        }
    }

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': 'mybd',
#     }
# }

# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

AUTH_USER_MODEL = "Customer.User"

# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True
USE_L10N = True
USE_TZ = True

# Email Confirmation
# EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'hamzar.books@gmail.com'
# EMAIL_HOST_PASSWORD = get_env_variable('GMAIL_APP_PASSWORD')
EMAIL_HOST_PASSWORD = 'nzekbgwtoybdgspe'
EMAIL_PORT = 587

# Front-end URLS
#
# REST_FRAMEWORK = {
# 	'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
# 	'PAGE_SIZE': 100
# }


REST_REGISTRATION = {
    'REGISTER_VERIFICATION_ENABLED': True,
    'REGISTER_EMAIL_VERIFICATION_ENABLED': True,
    'RESET_PASSWORD_VERIFICATION_ENABLED': True,
    'REGISTER_VERIFICATION_URL': 'https://hamzar.com/confirm-registration',
    'RESET_PASSWORD_VERIFICATION_URL': 'https://hamzar.com/reset-password',
    'REGISTER_EMAIL_VERIFICATION_URL': 'https://hamzar.com/verify-email/',

    'VERIFICATION_FROM_EMAIL': 'support@hamzar.com',
}

SESSION_COOKIE_SAMESITE = None
CORS_URLS_REGEX = r'^/api/.*$'
CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_ALLOW_ALL = True
CORS_ORIGIN_WHITELIST = [
    "https://www.hamzar.com",
    "http://localhost:3000",
    "http://127.0.0.1:8000"
]

OSCAR_DEFAULT_CURRENCY = 'Rs.'
OSCARAPI_BLOCK_ADMIN_API_ACCESS = False
OSCARAPI_OVERRIDE_MODULES = ["Hamzar.api"]
OSCARAPI_PRODUCT_FIELDS = ["url", "id", "upc", "title", "images"]
OSCARAPI_PRODUCTDETAIL_FIELDS = ["parent", "url", "upc", "id", "title", "description", "structure",
                                 "recommended_products", "attributes", "categories", "product_class", "images",
                                 "price", "availability", "children", "reviews"]


# Static files (CSS, JavaScript, Images)

def location(x):
    return os.path.join(os.path.curdir, x)


# Google Storage Bucket Configuration for static and media files

DEFAULT_FILE_STORAGE = 'config.storage_backends.GoogleCloudMediaStorage'
STATICFILES_STORAGE = 'config.storage_backends.GoogleCloudStaticStorage'
GS_PROJECT_ID = 'hamzars'
GS_MEDIA_BUCKET_NAME = 'hamzar-media'
GS_STATIC_BUCKET_NAME = 'hamzar-static'
STATIC_URL = 'https://storage.googleapis.com/{}/'.format(GS_STATIC_BUCKET_NAME)
MEDIA_URL = 'https://storage.googleapis.com/{}/'.format(GS_MEDIA_BUCKET_NAME)
GS_DEFAULT_ACL = 'publicRead'  # makes the files to private
GOOGLE_APPLICATION_CREDENTIALS = 'hamzars-credentials-storage.json'

# STATIC_URL = '/static/'
# STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
# STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
# STATICFILES_FINDERS = [
#     "django.contrib.staticfiles.finders.FileSystemFinder",
#     "django.contrib.staticfiles.finders.AppDirectoriesFinder",
# ]
#
# MEDIA_URL = '/media/'
# MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

LOG_ROOT = location('logs')
if not os.path.exists(LOG_ROOT):
    os.mkdir(LOG_ROOT)
