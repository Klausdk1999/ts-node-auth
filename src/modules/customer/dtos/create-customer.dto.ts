import { IsDateString, IsString, IsArray, ArrayUnique } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  fullname: string;

  @IsArray()
  @ArrayUnique()
  @IsString({ each: true })
  email: string[];

  @IsArray()
  @ArrayUnique()
  @IsString({ each: true })
  phone: string[];

  @IsDateString()
  registerDate: string;
}
