import { SharedFolderRoute } from '../enums/endpoint.enum';

export class FileInfo {
  fileName!: string;
  href!: string;
  path!: string;
  size!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor({ fileName, path, size, createdAt, updatedAt }: FileInfo) {
    const href = `/api/v1${SharedFolderRoute.fileStream}?path=${path}`;

    Object.assign(this, { fileName, href, path, size, createdAt, updatedAt });
  }
}
