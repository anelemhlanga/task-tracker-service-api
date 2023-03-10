import { Body, Controller } from '@nestjs/common';
import { CreateTaskDto } from './create-task.dto';

@Controller('task')
export class TaskController {

  constructor(){}
  
  createTask(@Body() body : CreateTaskDto()){
    console.log(body);
    
  }
}
