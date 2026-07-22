# Slide Specification Plan: NestJS Framework - Arquitectura y Desarrollo Web Progresivo en Node.js

## Destination & Objectives
- **Target Audience**: Estudiantes universitarios de Ingeniería de Sistemas / Desarrollo Web Avanzado (Universidad Icesi)
- **Target Slide Count**: 16
- **Output Files**:
  - Primary Deliverable: `slides/nestjs/nestjs.pdf`
  - HTML Canvas Medium: `slides/nestjs/nestjs.html`

## Decisions & Scope Boundary
- **In-Scope Key Concepts**: 
  - Problema de arquitectura en Node.js (Express unopinionated vs NestJS opinionated)
  - Filosofía y TypeScript / OOP / FP / FRP
  - Módulos (`@Module`), Controladores (`@Controller`), Servicios (`@Injectable`)
  - Inyección de Dependencias (DI) e Inversión de Control (IoC)
  - Request Lifecycle Pipeline: Middleware -> Guards -> Interceptors (Pre) -> Pipes -> Controller -> Interceptors (Post) -> Exception Filters
  - Diagrama de arquitectura en Mermaid pre-compilado a SVG
  - Código TypeScript funcional completo (DTOs, ValidationPipe, AuthGuard, Service, Controller)
  - Frames progresivos de construcción de una API REST profesional
- **Out-of-Scope**: Instalación inicial de Node/npm, CLI setup avanzado, despliegue en Kubernetes.

## Pedagogical Critique (Internal QA Pass)
- **Self-contained**: Todos los ejemplos de código y diagramas son 100% explícitos en el HTML, sin referencias a talleres externos ni enlaces fuera de la diapositiva.
- **Visual support**: Incorporación de diagrama SVG precompilado con `mermaid-cli` para visualizar el request lifecycle, icon grids semánticos SVG (sin emojis), y bloques de código de sintaxis TypeScript formateados.
- **Information density**: Balance de más del 60% de ocupación por diapositiva sin exceder límites de lectura (código conciso pero real).

---

## Slide-by-Slide Map (1..16)

### Slide 1: Portada
- **Title**: NestJS Framework
- **Subtitle**: Arquitectura Progresiva, Modular y Escalable en Node.js <span class="slide-footer-tag">Universidad Icesi · Departamento de IESI</span>
- **Layout Function**: `icesi.titleSlideA('NestJS Framework', 'Arquitectura Progresiva, Modular y Escalable en Node.js <span class="slide-footer-tag">Universidad Icesi · Depto. IESI</span>')`
- **Self-Contained Check**: ✅

### Slide 2: El Desafío de Node.js en Entornos Enterprise
- **Title**: El Desafío de Node.js en Entornos Enterprise
- **Layout Function**: `icesi.slideTwoCols(...)`
- **Col 1 (Problema Express/Fastify)**:
  - **Falta de Estructura Canónica**: En Express cada desarrollador organiza carpetas, middlewares y modelos de forma arbitraria.
  - **Dificultad de Mantenimiento**: Acoplamiento fuerte de código, lógica de negocio dispersa en handlers HTTP.
  - **Duda Tecnológica**: ¿Cómo escalar un equipo a 20+ desarrolladores sin perder convenciones?
- **Col 2 (Solución NestJS)**:
  - **Arquitectura de Código Abierto Fuertemente Opinada**: Inspirada en Angular pero para el Backend.
  - **Estructura Modular Obligatoria**: Capas claramente delimitadas (Controllers, Services, Modules).
  - **TypeScript de Primera Clase**: Tipado estático, decoradores y metasintaxis robusta.
- **Self-Contained Check**: ✅

### Slide 3: Pilares Fundamentales de NestJS
- **Title**: Pilares Fundamentales de NestJS
- **Layout Function**: `icesi.slideFourCards(...)`
- **Card 1**: `TypeScript & OOP` | Orientación a Objetos sólida combinada con el tipado estático nativo de TS para prevenir errores en tiempo de compilación.
- **Card 2**: `Inyección de Dependencias` | Contenedor IoC (Inversion of Control) nativo para desacoplamiento y facilidades extremas de Testing Unitario.
- **Card 3**: `Programación Funcional` | Integración fluida de conceptos funcionales y programación reactiva mediante RxJS observables.
- **Card 4**: `Basado en Estándares` | Construido sobre Express por defecto, pero fácilmente intercambiable por Fastify para alto rendimiento.
- **Self-Contained Check**: ✅

### Slide 4: Arquitectura del Request Lifecycle en NestJS
- **Title**: Ciclo de Vida de una Petición HTTP (Request Lifecycle)
- **Layout Function**: `icesi.slideSidebarLeftBlue(...)`
- **Sidebar**: Visual SVG del diagrama de arquitectura (`assets/request-lifecycle.svg`) precompilado desde Mermaid.
- **Content**:
  - Explicación detallada del orden de ejecución garantizado por NestJS:
  1. **Incoming Request** llega al puerto HTTP.
  2. **Middleware**: Modifica request/response global o de módulo (estilo Express).
  3. **Guards**: Evalúan permisos (AuthJWT, Roles). Si retorna `false`, se detiene con HTTP 403.
  4. **Interceptors (Pre)**: Interceptan la entrada para logging o bindings.
  5. **Pipes**: Validan y transforman el body/params (ValidationPipe con class-validator).
  6. **Controller / Handler**: Ejecuta la lógica y delega al Service.
  7. **Interceptors (Post)**: Modifican el valor de respuesta (e.g. sanitización, wrapping).
  8. **Exception Filters**: Capturan excepciones no manejadas y las formatean a JSON estandarizado.
- **Self-Contained Check**: ✅

### Slide 5: Módulos (`@Module`) - Organización de la Aplicación
- **Title**: Módulos (`@Module`) - Organización de la Aplicación
- **Layout Function**: `icesi.slideTwoCols(...)`
- **Col 1 (Concepto)**:
  - Un módulo es una clase anotada con `@Module()` que provee metadatos para organizar la estructura de la aplicación.
  - **`controllers`**: Conjunto de controladores instanciados en este módulo.
  - **`providers`**: Servicios e inyectables disponibles localmente.
  - **`imports`**: Lista de módulos importados cuyas exportaciones se requieren.
  - **`exports`**: Servicios que este módulo visibiliza a otros módulos.
- **Col 2 (Código TypeScript)**:
```typescript
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
```
- **Self-Contained Check**: ✅

### Slide 6: Controladores (`@Controller`) - Manejo de Rutas y HTTP
- **Title**: Controladores (`@Controller`) - Manejo de Rutas HTTP
- **Layout Function**: `icesi.slideStandard(...)`
- **Content**:
  - Los controladores son responsables de recibir peticiones entrantes y retornar respuestas al cliente.
  - Utilizan decoradores de ruta HTTP: `@Get()`, `@Post()`, `@Put()`, `@Delete()`, `@Param()`, `@Body()`, `@Query()`.
```typescript
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.findById(id);
  }
}
```
- **Self-Contained Check**: ✅

### Slide 7: Proveedores y Servicios (`@Injectable`)
- **Title**: Servicios (`@Injectable`) - Lógica de Negocio
- **Layout Function**: `icesi.slideStandard(...)`
- **Content**:
  - Los **Providers** son clases marcadas con `@Injectable()` que pueden ser inyectadas como dependencias en otras clases.
  - Separan totalmente la capa HTTP (Controller) de la lógica de negocio y persistencia de datos.
```typescript
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(dto);
    return await this.userRepository.save(user);
  }

  async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return user;
  }
}
```
- **Self-Contained Check**: ✅

### Slide 8: Inyección de Dependencias (DI) e Inversión de Control (IoC)
- **Title**: Inyección de Dependencias (DI) e IoC Container
- **Layout Function**: `icesi.slideTwoCols(...)`
- **Col 1 (Mecanismo Inversion of Control)**:
  - En lugar de crear instancias manualmente con `new UsersService()`, el contenedor de NestJS gestiona el ciclo de vida.
  - NestJS resuelve las dependencias por tipo TypeScript en tiempo de compilación/arranque.
  - Facilita el desacoplamiento y la inyección de **Mocks / Stubs** en pruebas unitarias con Jest.
- **Col 2 (Pruebas Unitarias Aisladas)**:
```typescript
const module: TestingModule = await Test.createTestingModule({
  controllers: [UsersController],
  providers: [
    {
      provide: UsersService,
      useValue: { create: jest.fn().mockResolvedValue(mockUser) },
    },
  ],
}).compile();

controller = module.get<UsersController>(UsersController);
```
- **Self-Contained Check**: ✅

### Slide 9: Pipes - Validación y Transformación de Datos
- **Title**: Pipes (`@UsePipes`) - Transformación y Validación
- **Layout Function**: `icesi.slideSidebarLeftOrange(...)`
- **Sidebar**: Icon grid semántico (SVG icons para Validación, Transformación, Manejo de Errores).
- **Content**:
  - Un Pipe opera sobre los argumentos recibidos antes de invocar el handler del controlador.
  - **Pipes Integrados**: `ParseIntPipe`, `ParseBoolPipe`, `ParseArrayPipe`, `ValidationPipe`.
  - Integración con `class-validator` y `class-transformer` para validar DTOs declarativamente:
```typescript
export class CreateUserDto {
  @IsString()
  @MinLength(3)
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsInt()
  @Min(18)
  readonly age: number;
}
```
- **Self-Contained Check**: ✅

### Slide 10: Guards - Autenticación y Autorización
- **Title**: Guards (`CanActivate`) - Seguridad de Rutas
- **Layout Function**: `icesi.slideTwoCols(...)`
- **Col 1 (Propósito y Firma)**:
  - Determinan si una petición debe ser procesada por el handler en función de condiciones (roles, tokens JWT).
  - Implementan la interfaz `CanActivate` que retorna un `boolean` o `Promise<boolean>`.
  - Se aplican con `@UseGuards(RolesGuard)`.
- **Col 2 (Ejemplo JWT / Roles Guard)**:
```typescript
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles) return true;
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.includes(user.role);
  }
}
```
- **Self-Contained Check**: ✅

### Slide 11: Interceptors - Aspect-Oriented Programming (AOP)
- **Title**: Interceptors (`NestInterceptor`) - Transformación AOP
- **Layout Function**: `icesi.slideSidebarLeftPurple(...)`
- **Sidebar**: Listado visual de casos de uso (Logging, Response Mapping, Cache, Timeout).
- **Content**:
  - Permiten envolver la ejecución de handlers utilizando RxJS `Observable`.
  - **Capacidades Principales**:
    - Extender o transformar el resultado devuelto por el método.
    - Transformar excepciones lanzadas.
    - Medir tiempos de respuesta (Benchmark / Performance Logging).
```typescript
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next.handle().pipe(
      tap(() => console.log(`Respuesta enviada en ${Date.now() - now}ms`))
    );
  }
}
```
- **Self-Contained Check**: ✅

### Slide 12: Comparativa del Pipeline de NestJS
- **Title**: Comparativa: ¿Cuándo usar cada componente?
- **Layout Function**: `icesi.slideFourCards(...)`
- **Card 1**: `Middleware` | CORS, Helmet, Body parsing, Cookie Parsing. Nivel HTTP crudo de Express.
- **Card 2**: `Guards` | Autenticación JWT, verificación de Roles y Scopes de usuario. Detiene la petición temprano.
- **Card 3**: `Interceptors` | Logging de rendimiento, Wrapping de respuestas `{ data, timestamp }`, Caché en Memoria.
- **Card 4**: `Pipes` | Validación de DTOs, parsing de Strings a IDs Numéricos / UUIDs.
- **Self-Contained Check**: ✅

### Slide 13: Ejemplo Integrado (Frame 1/3) - Entidad y DTO
- **Title**: Construyendo una API REST: Frame 1 - Entidad y DTO
- **Layout Function**: `icesi.slideTwoCols(...)`
- **Col 1 (Entidad de Dominio)**:
```typescript
// user.entity.ts
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column({ default: 'user' })
  role: string;
}
```
- **Col 2 (DTO de Creación)**:
```typescript
// create-user.dto.ts
export class CreateUserDto {
  @IsEmail({}, { message: 'Email inválido' })
  readonly email: string;

  @IsString()
  @MinLength(2)
  readonly name: string;

  @IsEnum(['user', 'admin'])
  @IsOptional()
  readonly role?: string;
}
```
- **Self-Contained Check**: ✅

### Slide 14: Ejemplo Integrado (Frame 2/3) - Servicio con Repositorio
- **Title**: Construyendo una API REST: Frame 2 - Servicio de Negocio
- **Layout Function**: `icesi.slideTwoCols(...)`
- **Col 1 (Implementación)**:
```typescript
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    const exists = await this.repo.findOneBy({ email: dto.email });
    if (exists) throw new ConflictException('Email ya registrado');
    const user = this.repo.create(dto);
    return await this.repo.save(user);
  }
}
```
- **Col 2 (Manejo de Errores)**:
  - NestJS captura automáticamente las excepciones como `ConflictException`, `NotFoundException` o `BadRequestException`.
  - Retorna directamente un payload JSON estandarizado RFC 7807:
```json
{
  "statusCode": 409,
  "message": "Email ya registrado",
  "error": "Conflict"
}
```
- **Self-Contained Check**: ✅

### Slide 15: Ejemplo Integrado (Frame 3/3) - Controlador con Guard y Pipe Global
- **Title**: Construyendo una API REST: Frame 3 - Controlador Completo
- **Layout Function**: `icesi.slideStandard(...)`
- **Content**:
```typescript
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
@UseInterceptors(TransformInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Roles('admin')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(@Body() dto: CreateUserDto): Promise<User> {
    return await this.usersService.create(dto);
  }
}
```
- **Self-Contained Check**: ✅

### Slide 16: Conclusiones y Ecosistema NestJS
- **Title**: Conclusiones y Ecosistema NestJS
- **Layout Function**: `icesi.sectionSlideEBlue(...)`
- **Content**:
  - NestJS proporciona una **arquitectura madura y opinada** para Node.js en entornos empresariales.
  - Permite escalar desde APIs REST simples hasta **Microservicios (gRPC, NATS, Kafka), WebSockets y GraphQL**.
  - Facilita la adopción de buenas prácticas: Inversión de Control, Principios SOLID y Cobertura de Pruebas.
- **Self-Contained Check**: ✅

---

## Handoff & Execution
Run `/implement-slides .agents/spec/slides-plan/nestjs-plan.md` to generate the presentation slides and compile the final PDF file under `slides/nestjs/nestjs.pdf`.
