import { VersionDto } from '../../version/dto/create-version.dto';

export class CreateSubappDto {
  subappName: string;
  versions?: VersionDto[];
}
