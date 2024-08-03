from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions

User = get_user_model()

class SignupView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        # print("POST request received")
        data = self.request.data

        name = data.get('name')
        email = data.get('email')
        password = data.get('password')
        password2 = data.get('password2')

        if not name or not email or not password or not password2:
            return Response({'error': 'All fields are required'}, status=400)

        if password == password2:
            if User.objects.filter(email=email).exists():
                return Response({'error': 'Email already exists'}, status=400)
            else:
                if len(password) < 6:
                    return Response({'error': 'Password must be at least 6 characters'}, status=400)
                else:
                    user = User.objects.create_user(email=email, password=password, name=name)
                    user.save()
                    return Response({'success': 'User created successfully'}, status=201)
        else:
            return Response({'error': 'Passwords do not match'}, status=400)
