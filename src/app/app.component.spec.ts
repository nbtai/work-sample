import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  describe('Palindrome', () => {
    it('should return truthy', () => {
      const appCtrl = new AppComponent();
      expect(appCtrl.isPalindrome('dcabaabacd')).toBeTrue();
    });

    it('should return false', () => {
      const appCtrl = new AppComponent();
      expect(appCtrl.isPalindrome('not a Palindrome')).toBeFalse();
    });
  });

  describe('Rotates matrix 90-degrees counter-clockwise', () => {
    it('should success for 4 * 4', () => {
      const appCtrl = new AppComponent();
      const mattrix = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15]
      ];

      const rotatedMatrix = [
        [3, 7, 11, 15],
        [2, 6, 10, 14],
        [1, 5, 9, 13],
        [0, 4, 8, 12]
      ];

      expect(appCtrl.rotateMatrixMinus90Degree(4, mattrix)).toEqual(rotatedMatrix);
    });

    it('should success for 5 * 5', () => {
      const appCtrl = new AppComponent();
      const mattrix = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24]
      ];

      const rotatedMatrix = [
        [4, 9, 14, 19, 24],
        [3, 8, 13, 18, 23],
        [2, 7, 12, 17, 22],
        [1, 6, 11, 16, 21],
        [0, 5, 10, 15, 20]
      ];

      expect(appCtrl.rotateMatrixMinus90Degree(5, mattrix)).toEqual(rotatedMatrix);
    });
  });
});
