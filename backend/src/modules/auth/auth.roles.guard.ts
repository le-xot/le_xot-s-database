import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { PrismaRoles } from '@prisma/client'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private roles: PrismaRoles[]) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    const user = request.user
    return this.roles.includes(user.role)
  }
}
