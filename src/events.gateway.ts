import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
@WebSocketGateway({ cors: true })
export class EventsGateway {
  @SubscribeMessage('events')
  handleEvent(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket,
  ): string {
    console.log(`[${new Date()}] ${client.id} : ${data.type}`);
    client.broadcast.emit('events', data);
    return 'ok';
  }
}
