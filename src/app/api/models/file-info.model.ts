export class FileInfo {
  fileName!: string;
  href!: string;
  size!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor({ fileName, href, size, createdAt, updatedAt }: FileInfo) {
    Object.assign(this, { fileName, href, size, createdAt, updatedAt });
  }
}
