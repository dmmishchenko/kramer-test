import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EdidItemComponent } from './edid-item.component';
import { Edid } from 'src/app/base/interfaces/edid-repository.interface';
import { ChangeDetectorRef } from '@angular/core';

describe('EdidItemComponent', () => {
  let component: EdidItemComponent;
  let fixture: ComponentFixture<EdidItemComponent>;
  let item: Edid;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdidItemComponent],
    });
    fixture = TestBed.createComponent(EdidItemComponent);
    component = fixture.componentInstance;
    item = {
      Name: 'Test Edid',
      NativeResolution: '1920x1080',
      Size: 27,
      status: 1,
    };
    component.item = item;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the item name', () => {
    const nameElement = fixture.debugElement.query(By.css('h5')).nativeElement;
    expect(nameElement.textContent).toContain(item.Name);
  });

  it('should display the item NativeResolution', () => {
    const resolutionElement = fixture.debugElement.query(
      By.css('p')
    ).nativeElement;
    expect(resolutionElement.textContent).toContain(item.NativeResolution);
  });

  it('should display the item Size', () => {
    const sizeElement = fixture.debugElement.query(
      By.css('small')
    ).nativeElement;
    expect(sizeElement.textContent).toContain(item.Size.toString());
  });

  it('should have the "active" class when the item is selected', () => {
    component.item.selected = true;
    fixture.componentRef.injector.get(ChangeDetectorRef).detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.classes['active']).toBe(true);
  });

  it('should have the "disabled" class when the item status is 0', () => {
    component.item.status = 0;
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.classes['disabled']).toBe(true);
  });

  it('should call itemClicked method when the button is clicked', () => {
    spyOn(component, 'itemClicked');
    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.triggerEventHandler('click', null);
    expect(component.itemClicked).toHaveBeenCalled();
  });

  it('should toggle the item selected property when itemClicked method is called', () => {
    component.item.selected = false;
    component.itemClicked();
    expect(component.item.selected).toBe(true);
    component.itemClicked();
    expect(component.item.selected).toBe(false);
  });
});
