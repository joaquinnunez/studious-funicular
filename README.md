Run:

	docker-compose up --build

And the first time use to load data:

	docker exec -it studious-funicular_api_1 python manage.py migrate
    docker exec -it studious-funicular_api_1 python manage.py loaddata world/data.json

API is in localhost:8000
App is in localhost:3000
