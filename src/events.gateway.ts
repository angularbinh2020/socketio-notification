import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
@WebSocketGateway({ cors: true })
export class EventsGateway {
  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string): string {
    console.log("come here")
    console.log(data);
    return data;
  }
}
