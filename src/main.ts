import { NestFactory } from '@nestjs/core'
import { AppModule } from "app.module"
import { ValidationPipe } from "@nestjs/common"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

async function bootstrap(): Promise<void> {
  //..........
  const app = await NestFactory.create(AppModule)
  /// Registers pipes as global pipes
  // (will be used within every HTTP route handler)
  app.useGlobalPipes(new ValidationPipe())
  
  await app.listen(3000)
}
/// - END OF: bootstrap
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
bootstrap().then(r => r)
