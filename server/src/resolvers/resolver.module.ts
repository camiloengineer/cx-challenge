import { Module} from '@nestjs/common';

import { UserResolver } from './user.resolver';
import { UserPurchasesResolver } from './userPurchases.resolver';
import { UserService } from 'src/services/user.service';
import { UserPurchasesService } from 'src/services/userPurchases.service';
import { UserProvider } from 'src/providers/user.provider';
import { UserPurchasesProvider } from 'src/providers/userPurchases.providers';
import { AutoMapper } from 'src/services/mappings/mapper.service';
import { default as MercadoLibreService } from '../../challenge/MercadolibreService';

@Module({
    providers: [UserResolver, UserPurchasesResolver, UserProvider, UserPurchasesProvider, UserService, UserPurchasesService, MercadoLibreService, AutoMapper]
})

export class ResolverModule {}