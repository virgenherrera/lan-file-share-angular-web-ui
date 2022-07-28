export class FileInfo {
  fileName!: string;
  size!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor({ fileName, size, createdAt, updatedAt }: FileInfo) {
    Object.assign(this, { fileName, size, createdAt, updatedAt });
  }
}
