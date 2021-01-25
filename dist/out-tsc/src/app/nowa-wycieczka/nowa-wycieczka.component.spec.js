import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { NowaWycieczkaComponent } from './nowa-wycieczka.component';
describe('NowaWycieczkaComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [NowaWycieczkaComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(NowaWycieczkaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=nowa-wycieczka.component.spec.js.map