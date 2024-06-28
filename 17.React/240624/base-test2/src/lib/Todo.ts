export interface Todo {
  getisComplete(): boolean;
  getcontent(): string;
  getprioirty(): number;
  getcreatedAt(): string;
  getlimit(): string;
}

export class Todo implements Todo {
  private isComplete: boolean;
  private content: string;
  private prioirty: number;
  private createdAt: string;
  private limit: string;
  constructor(content: string, prioirty: number, limit: string) {
    this.content = content;
    this.isComplete = false;
    this.prioirty = prioirty;
    const date = new Date();
    this.createdAt = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    this.limit = limit;
  }

  getisComplete(): boolean {
    return this.isComplete;
  }
  getcontent(): string {
    return this.content;
  }
  getprioirty(): number {
    return this.prioirty;
  }
  getcreatedAt(): string {
    return this.createdAt;
  }
  getlimit(): string {
    return this.limit;
  }

  setComplete(): void {
    this.isComplete = true;
  }
}
