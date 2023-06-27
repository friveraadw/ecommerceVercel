--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

-- Started on 2023-06-08 11:02:00

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE marketplace;
--
-- TOC entry 3378 (class 1262 OID 16521)
-- Name: marketplace; Type: DATABASE; Schema: -; Owner: user_marketplace
--

CREATE DATABASE marketplace WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';


ALTER DATABASE marketplace OWNER TO user_marketplace;

\connect marketplace

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 3379 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 16532)
-- Name: categoria_producto; Type: TABLE; Schema: public; Owner: user_marketplace
--

CREATE TABLE public.categoria_producto (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    fecha_hora_creacion timestamp without time zone DEFAULT now() NOT NULL,
    activa smallint DEFAULT 1 NOT NULL
);


ALTER TABLE public.categoria_producto OWNER TO user_marketplace;

--
-- TOC entry 216 (class 1259 OID 16531)
-- Name: categoria_producto_id_seq; Type: SEQUENCE; Schema: public; Owner: user_marketplace
--

CREATE SEQUENCE public.categoria_producto_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categoria_producto_id_seq OWNER TO user_marketplace;

--
-- TOC entry 3380 (class 0 OID 0)
-- Dependencies: 216
-- Name: categoria_producto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user_marketplace
--

ALTER SEQUENCE public.categoria_producto_id_seq OWNED BY public.categoria_producto.id;


--
-- TOC entry 219 (class 1259 OID 16541)
-- Name: marca_producto; Type: TABLE; Schema: public; Owner: user_marketplace
--

CREATE TABLE public.marca_producto (
    id integer NOT NULL,
    nombre character varying(200) NOT NULL,
    fecha_hora_creacion timestamp without time zone DEFAULT now() NOT NULL,
    activa smallint DEFAULT 1 NOT NULL
);


ALTER TABLE public.marca_producto OWNER TO user_marketplace;

--
-- TOC entry 218 (class 1259 OID 16540)
-- Name: marca_producto_id_seq; Type: SEQUENCE; Schema: public; Owner: user_marketplace
--

CREATE SEQUENCE public.marca_producto_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.marca_producto_id_seq OWNER TO user_marketplace;

--
-- TOC entry 3381 (class 0 OID 0)
-- Dependencies: 218
-- Name: marca_producto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user_marketplace
--

ALTER SEQUENCE public.marca_producto_id_seq OWNED BY public.marca_producto.id;


--
-- TOC entry 221 (class 1259 OID 16550)
-- Name: producto; Type: TABLE; Schema: public; Owner: user_marketplace
--

CREATE TABLE public.producto (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    descripcion_breve character varying(50) NOT NULL,
    descripcion text NOT NULL,
    precio integer NOT NULL,
    descuento smallint DEFAULT 0 NOT NULL,
    fecha_hora_creacion timestamp with time zone DEFAULT now() NOT NULL,
    activo smallint DEFAULT 1 NOT NULL
);


ALTER TABLE public.producto OWNER TO user_marketplace;

--
-- TOC entry 223 (class 1259 OID 16574)
-- Name: producto_categoria_producto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.producto_categoria_producto (
    id_producto smallint NOT NULL,
    id_categoria smallint NOT NULL
);


ALTER TABLE public.producto_categoria_producto OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16549)
-- Name: producto_id_seq; Type: SEQUENCE; Schema: public; Owner: user_marketplace
--

CREATE SEQUENCE public.producto_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.producto_id_seq OWNER TO user_marketplace;

--
-- TOC entry 3383 (class 0 OID 0)
-- Dependencies: 220
-- Name: producto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user_marketplace
--

ALTER SEQUENCE public.producto_id_seq OWNED BY public.producto.id;


--
-- TOC entry 222 (class 1259 OID 16561)
-- Name: producto_marca_producto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.producto_marca_producto (
    id_producto smallint NOT NULL,
    id_marca smallint NOT NULL
);


ALTER TABLE public.producto_marca_producto OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16523)
-- Name: usuario; Type: TABLE; Schema: public; Owner: user_marketplace
--

CREATE TABLE public.usuario (
    id integer NOT NULL,
    nombre character varying(55) NOT NULL,
    apellido_paterno character varying(70) NOT NULL,
    apellido_materno character varying(70),
    email character varying(100) NOT NULL,
    password character varying(60) NOT NULL,
    fecha_hora_creacion timestamp without time zone DEFAULT now() NOT NULL,
    fecha_hora_modificacion timestamp without time zone,
    activo smallint DEFAULT 0
);


ALTER TABLE public.usuario OWNER TO user_marketplace;

--
-- TOC entry 214 (class 1259 OID 16522)
-- Name: usuario_id_seq; Type: SEQUENCE; Schema: public; Owner: user_marketplace
--

CREATE SEQUENCE public.usuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuario_id_seq OWNER TO user_marketplace;

--
-- TOC entry 3385 (class 0 OID 0)
-- Dependencies: 214
-- Name: usuario_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user_marketplace
--

ALTER SEQUENCE public.usuario_id_seq OWNED BY public.usuario.id;


--
-- TOC entry 3199 (class 2604 OID 16535)
-- Name: categoria_producto id; Type: DEFAULT; Schema: public; Owner: user_marketplace
--

ALTER TABLE ONLY public.categoria_producto ALTER COLUMN id SET DEFAULT nextval('public.categoria_producto_id_seq'::regclass);


--
-- TOC entry 3202 (class 2604 OID 16544)
-- Name: marca_producto id; Type: DEFAULT; Schema: public; Owner: user_marketplace
--

ALTER TABLE ONLY public.marca_producto ALTER COLUMN id SET DEFAULT nextval('public.marca_producto_id_seq'::regclass);


--
-- TOC entry 3205 (class 2604 OID 16553)
-- Name: producto id; Type: DEFAULT; Schema: public; Owner: user_marketplace
--

ALTER TABLE ONLY public.producto ALTER COLUMN id SET DEFAULT nextval('public.producto_id_seq'::regclass);


--
-- TOC entry 3196 (class 2604 OID 16526)
-- Name: usuario id; Type: DEFAULT; Schema: public; Owner: user_marketplace
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id SET DEFAULT nextval('public.usuario_id_seq'::regclass);


--
-- TOC entry 3366 (class 0 OID 16532)
-- Dependencies: 217
-- Data for Name: categoria_producto; Type: TABLE DATA; Schema: public; Owner: user_marketplace
--

INSERT INTO public.categoria_producto VALUES (1, 'Women', '2023-06-05 18:28:31.793334', 1);
INSERT INTO public.categoria_producto VALUES (2, 'Men', '2023-06-05 18:29:29.164431', 1);
INSERT INTO public.categoria_producto VALUES (3, 'Kids', '2023-06-05 18:29:29.164431', 1);
INSERT INTO public.categoria_producto VALUES (4, 'Accessories', '2023-06-05 18:29:29.164431', 1);


--
-- TOC entry 3368 (class 0 OID 16541)
-- Dependencies: 219
-- Data for Name: marca_producto; Type: TABLE DATA; Schema: public; Owner: user_marketplace
--

INSERT INTO public.marca_producto VALUES (1, 'Nike', '2023-06-05 20:27:59.614425', 1);
INSERT INTO public.marca_producto VALUES (2, 'Adidas', '2023-06-05 20:28:58.874225', 1);


--
-- TOC entry 3370 (class 0 OID 16550)
-- Dependencies: 221
-- Data for Name: producto; Type: TABLE DATA; Schema: public; Owner: user_marketplace
--

INSERT INTO public.producto VALUES (1, 'Zapatilla Trap', 'asdasdasda', 'asdsadsadasdasd', 150000, 0, '2023-06-07 20:50:45.324216-04', 1);


--
-- TOC entry 3372 (class 0 OID 16574)
-- Dependencies: 223
-- Data for Name: producto_categoria_producto; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.producto_categoria_producto VALUES (1, 2);


--
-- TOC entry 3371 (class 0 OID 16561)
-- Dependencies: 222
-- Data for Name: producto_marca_producto; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.producto_marca_producto VALUES (1, 1);


--
-- TOC entry 3364 (class 0 OID 16523)
-- Dependencies: 215
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: user_marketplace
--



--
-- TOC entry 3386 (class 0 OID 0)
-- Dependencies: 216
-- Name: categoria_producto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user_marketplace
--

SELECT pg_catalog.setval('public.categoria_producto_id_seq', 4, true);


--
-- TOC entry 3387 (class 0 OID 0)
-- Dependencies: 218
-- Name: marca_producto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user_marketplace
--

SELECT pg_catalog.setval('public.marca_producto_id_seq', 2, true);


--
-- TOC entry 3388 (class 0 OID 0)
-- Dependencies: 220
-- Name: producto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user_marketplace
--

SELECT pg_catalog.setval('public.producto_id_seq', 1, true);


--
-- TOC entry 3389 (class 0 OID 0)
-- Dependencies: 214
-- Name: usuario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user_marketplace
--

SELECT pg_catalog.setval('public.usuario_id_seq', 1, false);


--
-- TOC entry 3212 (class 2606 OID 16539)
-- Name: categoria_producto categoria_producto_pkey; Type: CONSTRAINT; Schema: public; Owner: user_marketplace
--

ALTER TABLE ONLY public.categoria_producto
    ADD CONSTRAINT categoria_producto_pkey PRIMARY KEY (id);


--
-- TOC entry 3214 (class 2606 OID 16548)
-- Name: marca_producto marca_producto_pkey; Type: CONSTRAINT; Schema: public; Owner: user_marketplace
--

ALTER TABLE ONLY public.marca_producto
    ADD CONSTRAINT marca_producto_pkey PRIMARY KEY (id);


--
-- TOC entry 3216 (class 2606 OID 16560)
-- Name: producto producto_pkey; Type: CONSTRAINT; Schema: public; Owner: user_marketplace
--

ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_pkey PRIMARY KEY (id);


--
-- TOC entry 3210 (class 2606 OID 16530)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: user_marketplace
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);


--
-- TOC entry 3219 (class 2606 OID 16577)
-- Name: producto_categoria_producto producto_categoria_producto_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producto_categoria_producto
    ADD CONSTRAINT producto_categoria_producto_fk FOREIGN KEY (id_producto) REFERENCES public.producto(id);


--
-- TOC entry 3220 (class 2606 OID 16582)
-- Name: producto_categoria_producto producto_categoria_producto_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producto_categoria_producto
    ADD CONSTRAINT producto_categoria_producto_fk_1 FOREIGN KEY (id_categoria) REFERENCES public.categoria_producto(id);


--
-- TOC entry 3217 (class 2606 OID 16564)
-- Name: producto_marca_producto producto_marca_producto_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producto_marca_producto
    ADD CONSTRAINT producto_marca_producto_fk FOREIGN KEY (id_producto) REFERENCES public.producto(id);


--
-- TOC entry 3218 (class 2606 OID 16569)
-- Name: producto_marca_producto producto_marca_producto_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producto_marca_producto
    ADD CONSTRAINT producto_marca_producto_fk_1 FOREIGN KEY (id_marca) REFERENCES public.marca_producto(id);


--
-- TOC entry 3382 (class 0 OID 0)
-- Dependencies: 223
-- Name: TABLE producto_categoria_producto; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.producto_categoria_producto TO user_marketplace;


--
-- TOC entry 3384 (class 0 OID 0)
-- Dependencies: 222
-- Name: TABLE producto_marca_producto; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.producto_marca_producto TO user_marketplace;


-- Completed on 2023-06-08 11:02:00

--
-- PostgreSQL database dump complete
--

