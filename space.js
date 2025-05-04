describe("Account Form Validation", function () {
    it("should validate valid names", function () {
      expect(validateName("John")).toBeTrue();
    });
  it("should validate valid names", function () {
    expect(validateName("John")).toBeTrue();
  });

  it("should invalidate short or numeric names", function () {
    expect(validateName("A")).toBeFalse();
    expect(validateName("123")).toBeFalse();
  });

  it("should validate valid email", function () {
    expect(validateEmail("user@example.com")).toBeTrue();
  });

  it("should invalidate malformed emails", function () {
    expect(validateEmail("user.com")).toBeFalse();
    expect(validateEmail("user@.com")).toBeFalse();
  });

    it("should invalidate short or numeric names", function () {
      expect(validateName("A")).toBeFalse();
      expect(validateName("123")).toBeFalse();
    });
  
    it("should validate valid email", function () {
      expect(validateEmail("user@example.com")).toBeTrue();
    });
  
    it("should invalidate malformed emails", function () {
      expect(validateEmail("user.com")).toBeFalse();
      expect(validateEmail("user@.com")).toBeFalse();
    });
  
    it("should validate matching passwords", function () {
      expect(validatePasswordMatch("secret123", "secret123")).toBeTrue();
    });
  
    it("should invalidate mismatched or short passwords", function () {
      expect(validatePasswordMatch("short", "short")).toBeFalse();
      expect(validatePasswordMatch("password", "different")).toBeFalse();
    });
  
    it("should validate a correct date of birth", function () {
      expect(validateDOB("2000-01-01")).toBeTrue();
    });
  
    it("should invalidate future dates or invalid format", function () {
      expect(validateDOB("2099-01-01")).toBeFalse();
      expect(validateDOB("not-a-date")).toBeFalse();
    });
  });
  
  it("should validate matching passwords", function () {
    expect(validatePasswordMatch("secret123", "secret123")).toBeTrue();
  });

  it("should invalidate mismatched or short passwords", function () {
    expect(validatePasswordMatch("short", "short")).toBeFalse();
    expect(validatePasswordMatch("password", "different")).toBeFalse();
  });

  it("should validate a correct date of birth", function () {
    expect(validateDOB("2000-01-01")).toBeTrue();
  });

  it("should invalidate future dates or invalid format", function () {
    expect(validateDOB("2099-01-01")).toBeFalse();
    expect(validateDOB("not-a-date")).toBeFalse();
   });
 });