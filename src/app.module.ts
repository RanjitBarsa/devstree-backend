import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestimonialModule } from './testimonial/testimonial.module';


@Module({
  imports: [TestimonialModule,
    MongooseModule.forRoot(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
