CREATE TABLE "public.Animals" (
	"animal_id" serial NOT NULL,
	"animal_name" varchar NOT NULL,
	"species" varchar NOT NULL,
	"age" int NOT NULL,
	"gender" varchar NOT NULL,
	"color" varchar NOT NULL,
	"description" TEXT NOT NULL,
	CONSTRAINT "Animals_pk" PRIMARY KEY ("animal_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Breeds" (
	"breed_id" serial NOT NULL,
	"breed_name" varchar NOT NULL,
	"species_id" integer NOT NULL,
	CONSTRAINT "Breeds_pk" PRIMARY KEY ("breed_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Adopters" (
	"adopter_id" serial NOT NULL,
	"full_name" varchar NOT NULL,
	"phone_number" varchar NOT NULL,
	"email" varchar NOT NULL,
	"address" varchar NOT NULL,
	CONSTRAINT "Adopters_pk" PRIMARY KEY ("adopter_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Adoptions" (
	"adoption_id" serial NOT NULL,
	"animal_id" integer NOT NULL,
	"adopter_id" integer NOT NULL,
	"adoption_date" DATE NOT NULL,
	"adoption_fee" numeric NOT NULL,
	CONSTRAINT "Adoptions_pk" PRIMARY KEY ("adoption_id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "Breeds" ADD CONSTRAINT "Breeds_fk0" FOREIGN KEY ("species_id") REFERENCES "Animals"("animal_id");


ALTER TABLE "Adoptions" ADD CONSTRAINT "Adoptions_fk0" FOREIGN KEY ("animal_id") REFERENCES "Animals"("animal_id");
ALTER TABLE "Adoptions" ADD CONSTRAINT "Adoptions_fk1" FOREIGN KEY ("adopter_id") REFERENCES "Adopters"("adopter_id");





