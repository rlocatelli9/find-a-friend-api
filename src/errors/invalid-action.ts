export class InvalidActionError extends Error {
  constructor(message?:string){
    super(message || 'Invalid action');
  }
}
