import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { ListaWycieczekComponent } from './lista-wycieczek.component';
describe('ListaWycieczekComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [ListaWycieczekComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ListaWycieczekComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=lista-wycieczek.component.spec.js.map