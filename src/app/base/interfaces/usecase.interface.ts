export interface Usecase<T = void> {
  execute(...args: any[]): T;
}
